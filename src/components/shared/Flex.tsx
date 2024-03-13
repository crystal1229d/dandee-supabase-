import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  dir?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
}

const Flex = styled.div<FlexProps>(({ align, justify, dir, gap }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: dir,
  gap: gap,
}))

export default Flex
