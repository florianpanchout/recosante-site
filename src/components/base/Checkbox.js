import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    border: 2px solid
      ${(props) =>
        props.focus ? props.theme.colors.main : props.theme.colors.text};
    border-radius: 0.25rem;
    cursor: pointer;
  }
`
const Check = styled.svg`
  position: absolute;
  top: -0.05em;
  left: -0.1em;
  width: auto;
  height: 1.4em;
  cursor: pointer;

  path {
    fill: none;
    stroke: ${(props) => props.theme.colors.main};
    stroke-width: 600;
    stroke-dasharray: 4322.794921875;
    stroke-dashoffset: ${(props) => (props.checked ? 0 : 4322.794921875)};
    transition: stroke-dashoffset ${(props) => (props.checked ? '200ms' : '0')}
      ease-out;
  }
`
const Input = styled.input`
  margin-right: ${(props) => (props.label ? '1em' : 0)};
  opacity: 0;
  pointer-events: none;
`
const LabelWrapper = styled.div``
const Label = styled.label`
  color: ${(props) =>
    props.focus ? props.theme.colors.main : props.theme.colors.text};
`
const Detail = styled.div`
  margin-left: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors[props.interactive ? 'main' : 'text']};
  cursor: ${(props) => (props.interactive ? 'pointer' : 'inherit')};
`
export default function Checkbox(props) {
  const { setSensible } = useContext(ModalContext)

  const [focus, setFocus] = useState(false)
  return (
    <Wrapper
      small={props.small}
      onClick={() => props.onChange(!props.checked)}
      className={props.className}
      focus={focus}
    >
      <Check
        checked={props.checked}
        width='3213'
        height='2768'
        viewBox='0 0 3213 2768'
      >
        <path
          id='check'
          d='M165 1360C165 1360 1153 2220 1277 2336C1885.14 828 3101 224 3101 224'
        />
      </Check>
      <Input
        checked={props.checked}
        type='checkbox'
        label={props.children || props.label}
        onChange={(e) => {
          props.onChange(e.target.checked)
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {(props.children || props.label) && (
        <LabelWrapper>
          <Label
            focus={focus}
            dangerouslySetInnerHTML={{
              __html: props.children || props.label,
            }}
          />
          {props.detail && (
            <Detail
              onClick={(e) => {
                if (props.detail.modal) {
                  e.stopPropagation()
                  setSensible(true)
                }
              }}
              interactive={props.detail.modal}
              dangerouslySetInnerHTML={{
                __html: props.detail.label,
              }}
            />
          )}
        </LabelWrapper>
      )}
    </Wrapper>
  )
}
