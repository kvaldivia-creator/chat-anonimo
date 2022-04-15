import React, { ButtonHTMLAttributes } from "react"

type Gen<T> = T

type IconType = Gen<'search' | 'config' | 'arrow-left' | 'send-message' | 'user' | 'users-group' | 'delete'>
type IconSizeType = Gen<'24'| '32' | '64'>
type TypeInput = Gen<
  'text' | 'email' | 'password' | 'button' | 'checkbox' | 'date' | 'datetime' | 'file' | 'hidden' | 'image'
  | 'number' | 'radio' | 'url' | 'tel' | 'submit' | 'search' | 'range' | 'reset' | 'month' | 'color' | 'week'
  | 'datetime-local' >

export interface IconStyleI {
  color?: string
  className?: string
  size?: IconSizeType
}

export interface IconI {
  type?: IconType
  style?: IconStyleI
  className?: string
}

export interface NavLinkI {
  href: string
  text: string
  onClick?: () => void
  className?: string
}

export interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  icon?: IconType
  classForButton?: string
  classForContent?: string
  onClick?: () => void
  circle?: boolean
}

export interface ChatCardI {
  id?: string | number
  avatar?: string
  userName?: string
  altAvatar?: string
  pagina?: string
  src?: string
  textMessage?: string
  // eslint-disable-next-line no-restricted-globals
  onClick?: event
}

export interface DropdownNavConfigI {
  children?: React.ReactNode
}

export interface ModalI {
  children?: React.ReactNode
  active?: boolean
  onClick?: () => void
}

export interface InputFieldI extends InputHTMLAttributes<HTMLInputElement> {
  idInput?: string
  typeInput?: TypeInput
  nameInput?: string
  textPlaceholder?: string
  required?: boolean
  valueInput?: string | number
  onChange?: React.ChangeEventHandler;
  iconInputLeft?: IconType
  iconInputRight?: IconType
  classNameForWrapper?: string
  classNameForContainer?: string
  classNameForInput?: string
  textLabel?: string
  iconPositionLeft?: boolean
  iconPositionRight?: boolean
  disabled?: boolean
  collapseLabel?: boolean
}