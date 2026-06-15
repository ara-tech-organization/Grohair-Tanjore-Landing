import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Check, ChevronDown } from 'lucide-react'
import './ConcernDropdown.css'

const DROPDOWN_GAP = 6
const VIEWPORT_MARGIN = 12
const MAX_MENU_HEIGHT = 260
const MIN_MENU_HEIGHT = 150

export default function ConcernDropdown({
  error = false,
  onChange,
  options,
  placeholder = 'Select your concern',
  value,
  variant = 'hero',
}) {
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const menuRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState(null)

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const updatePosition = () => {
      if (!triggerRef.current) {
        return
      }

      const rect = triggerRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom - VIEWPORT_MARGIN
      const spaceAbove = rect.top - VIEWPORT_MARGIN
      const shouldOpenUpward = spaceBelow < 220 && spaceAbove > spaceBelow
      const availableSpace = shouldOpenUpward ? spaceAbove : spaceBelow
      const maxHeight = Math.max(
        MIN_MENU_HEIGHT,
        Math.min(MAX_MENU_HEIGHT, availableSpace)
      )
      const width = Math.min(rect.width, window.innerWidth - (VIEWPORT_MARGIN * 2))
      const left = Math.min(
        Math.max(rect.left, VIEWPORT_MARGIN),
        window.innerWidth - width - VIEWPORT_MARGIN
      )
      const top = shouldOpenUpward
        ? Math.max(VIEWPORT_MARGIN, rect.top - maxHeight - DROPDOWN_GAP)
        : Math.min(
            window.innerHeight - maxHeight - VIEWPORT_MARGIN,
            rect.bottom + DROPDOWN_GAP
          )

      setMenuStyle({
        left,
        maxHeight,
        openUpward: shouldOpenUpward,
        top,
        width,
      })
    }

    const closeOnOutsideClick = (event) => {
      const target = event.target
      if (
        rootRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return
      }
      setOpen(false)
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const handleSelect = (option) => {
    onChange(option)
    setOpen(false)
  }

  const menu = open && menuStyle && typeof document !== 'undefined'
    ? createPortal(
        <div
          ref={menuRef}
          className={[
            'concern-dropdown__menu',
            `concern-dropdown__menu--${variant}`,
            menuStyle.openUpward ? 'is-upward' : '',
          ].filter(Boolean).join(' ')}
          style={{
            left: `${menuStyle.left}px`,
            maxHeight: `${menuStyle.maxHeight}px`,
            top: `${menuStyle.top}px`,
            width: `${menuStyle.width}px`,
          }}
        >
          <ul className="concern-dropdown__options" role="listbox">
            {options.map((option) => {
              const isSelected = value === option

              return (
                <li key={option}>
                  <button
                    type="button"
                    className={[
                      'concern-dropdown__option',
                      isSelected ? 'is-selected' : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => handleSelect(option)}
                  >
                    <span className="concern-dropdown__option-label">{option}</span>
                    {isSelected ? <Check size={14} /> : null}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <div
        ref={rootRef}
        className={[
          'concern-dropdown',
          `concern-dropdown--${variant}`,
          open ? 'is-open' : '',
          error ? 'has-error' : '',
        ].filter(Boolean).join(' ')}
      >
        <button
          ref={triggerRef}
          type="button"
          className="concern-dropdown__trigger"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className={value ? 'concern-dropdown__value' : 'concern-dropdown__placeholder'}>
            {value || placeholder}
          </span>
          <ChevronDown size={16} className="concern-dropdown__icon" />
        </button>
      </div>
      {menu}
    </>
  )
}
