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

export function getAttrs(attrs: Data) {
  return {
    props: attrs.props,
    events: {
      onUpdate: attrs.onUpdate as Function,
      onChange: attrs.onChange as Function,
    },
  }
}
