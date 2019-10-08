import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hi, I'm <Styled.a href="https://www.linkedin.com/in/jiuntingwang">Jiun Ting Wang</Styled.a>
    {` `}
    and I create easy marketing, design, and developement tutorials.
    <br />
    Located in Seattle, WA.
  </Fragment>
)
