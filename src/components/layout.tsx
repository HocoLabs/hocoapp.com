/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from "clsx"
import * as React from "react"
import "./layout.css"

type LayoutProps = {
  children: React.ReactNode,
  className?: string,
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={clsx(className)}
      style={{ minHeight: `100vh` }}
    >
      {children}
    </div>
  )
}
export default Layout
