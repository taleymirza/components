import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {COMMON} from './constants'
import theme from './theme'

const DetailsReset = styled('details')`
  & > summary {
    list-style: none;
  }
  & > summary::before {
    display: none;
  }
  & > summary::-webkit-details-marker {
    display: none;
  }
`

function DetailsBase({children, render = getRenderer(children), ...rest}) {
  const [open, setOpen] = useState(Boolean(rest.open))

  function toggle(event) {
    if (event) event.preventDefault()
    setOpen(!open)
  }

  return (
    <DetailsReset {...rest} open={open}>
      {render({open, toggle})}
    </DetailsReset>
  )
}

function getRenderer(children) {
  return typeof children === 'function' ? children : () => children
}

const Details = styled(DetailsBase)(COMMON)

Details.defaultProps = {
  theme
}

Details.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  open: PropTypes.bool,
  render: PropTypes.func,
  theme: PropTypes.object,
  ...COMMON.propTypes
}

export default Details
