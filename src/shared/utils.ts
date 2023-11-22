export function toPxString(value: number | string) {
  if (typeof value === 'number') {
    return `${value}px`
  }
  else if (typeof value === 'string') {
    if (value.endsWith('px')) {
      return value
    }
    const numericValue = Number.parseFloat(value)
    if (!Number.isNaN(numericValue)) {
      return `${numericValue}px`
    }
  }
}

export function getAttrs(attrs: Record<string, any>) {
  const { props, ...widget } = attrs
  return {
    props,
    widget,
  }
}

export function setStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  for (const [key, value] of Object.entries(styles)) {
    element.style.setProperty(key, value as string)
  }
}
