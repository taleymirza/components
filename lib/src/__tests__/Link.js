/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from '../Link'
import {render} from '../utils/testing'
import {COMMON, TYPOGRAPHY} from '../constants'

describe('Link', () => {
  it('implements system props', () => {
    expect(Link).toImplementSystemProps(COMMON)
    expect(Link).toImplementSystemProps(TYPOGRAPHY)
  })

  it('has default theme', () => {
    expect(Link).toSetDefaultTheme()
  })

  it('passes href down to link element', () => {
    expect(render(<Link href="https://github.com" />)).toMatchSnapshot()
  })

  it('renders without any props', () => {
    expect(render(<Link />)).toMatchSnapshot()
  })

  it('respects the "as" prop', () => {
    expect(render(<Link as="button" />).type).toEqual('button')
  })

  it('respects the "as" prop with non-string component types', () => {
    function ExampleLink({children}) {
      return <a className="example-link">{children}</a>
    }

    expect(render(<Link as={ExampleLink}>Example</Link>)).toMatchSnapshot()
  })

  it('respects hoverColor prop', () => {
    expect(render(<Link hoverColor="blue.4" />)).toMatchSnapshot()
  })

  it('respects the "fontStyle" prop', () => {
    expect(render(<Link fontStyle="italic" />)).toHaveStyleRule('font-style', 'italic')
    expect(render(<Link as="i" fontStyle="normal" />)).toHaveStyleRule('font-style', 'normal')
  })

  it('applies button styles when rendering a button element', () => {
    expect(render(<Link as="button" />)).toMatchSnapshot()
  })
})
