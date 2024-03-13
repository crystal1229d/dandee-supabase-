import { colors } from '@/styles/colorPalette'
import { spacing } from '@/styles/spacing'
import { css } from '@emotion/react'
import Flex from '@shared/Flex'
import Text from './Text'

interface ContentsBarProps {
  title: string
}

function ContentsBar({ title }: ContentsBarProps) {
  return (
    <Flex justify="center" css={containerStyle}>
      <Text bold={true} color="blue980">
        {title}
      </Text>
    </Flex>
  )
}

const containerStyle = css`
  width: 100%;
  margin: 0 ${spacing.pageLeftRight};
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.blue200};
  cursor: pointer;
  transition: all 0.35s;

  background-size: 200% auto;
  background-position: left top;
  border-color: transparent;
  color: #464646;
  &:hover {
    background-color: linear-gradient(
      to right,
      #a1c4fd 0%,
      #c2e9fb 51%,
      #a1c4fd 100%
    );
    background-image: linear-gradient(
      to right,
      #a1c4fd 0%,
      #c2e9fb 51%,
      #a1c4fd 100%
    );
    background-position: right bottom;
    color: #000;
  }
`

export default ContentsBar
