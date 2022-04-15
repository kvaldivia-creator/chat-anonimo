import styled from 'styled-components'
import { InputFieldI } from '..';
import Icon from '../Icon'

const ui = {
  InputGroup: styled.div<{ collapseLabel: boolean }>`
    width: 100%;
    border-radius: 8px;
    ${({ collapseLabel }) =>
      collapseLabel
        ? `
        label {
            padding-bottom: 8px;
        }
    `
        : ''}
  `,

  InputGroupLabel: styled.label`
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: #121212;
    font-weight: 500;
  `,

  InputGroupContainer: styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    align-items: center;
    width: 100%;
    border-radius: 8px;
    outline: none;
    overflow: hidden;

    &:focus-within {
      background-color: #fff;
      color: #000000;
    }

    span {
      display: flex;
    }

    .icon-left {
      margin-left: 20px;
    }

    .icon-right {
      margin-right: 20px;
    }

    .icon-password {
      opacity: 0.25;
    }
  `,

  InputGroupInput: styled.input`
    overflow: hidden;
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
    background: none;
    outline: none;
    border: 0;  
    height: 48px;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.darkGrey};
    }

    ::selection {
      background: #0091dc;
      color: white;
    }
    caret-color: #0091dc;
  `
}

const InputField = ({
  idInput,
  typeInput = 'text',
  nameInput,
  textPlaceholder,
  required,
  valueInput,
  iconInputLeft,
  iconInputRight,
  textLabel,
  iconPositionLeft,
  iconPositionRight,
  disabled,
  collapseLabel = false,
  classNameForWrapper,
  classNameForContainer,
  classNameForInput,
  onChange,
  ...rest
}: InputFieldI) => {
  return (
    <ui.InputGroup collapseLabel className={classNameForWrapper}>
      {collapseLabel && <ui.InputGroupLabel htmlFor={idInput}>{textLabel}</ui.InputGroupLabel>}
      <ui.InputGroupContainer className={classNameForContainer}>
        {iconPositionLeft && <span className="icon-left">{iconInputLeft && <Icon type={iconInputLeft} />}</span>}

        <ui.InputGroupInput
          className={classNameForInput}
          type={typeInput}
          id={idInput}
          name={nameInput}
          placeholder={textPlaceholder}
          required={required}
          value={valueInput}
          onChange={onChange}
          disabled={disabled}
          autoComplete='off'
          {...rest}
        />
        {iconPositionRight &&
          <span className="icon-right">
            {iconInputRight && <Icon type={iconInputRight} />}
          </span>}
      </ui.InputGroupContainer>
    </ui.InputGroup>
  )
}

export default InputField
