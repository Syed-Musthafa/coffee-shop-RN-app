import React, {useState, useCallback} from 'react'
import { View, Text } from 'react-native'

const TextReadMore = ({ readMoreStyle, text, textStyle }) => {

    const [showMoreButton, setShowMoreButton] = useState(false);
    const [textShown, setTextShown] = useState(false);
    const [numLines, setNumLines] = useState(undefined);
  
    const toggleTextShown = () => {
      setTextShown(!textShown);
    };
  
    React.useEffect(() => {
      setNumLines(textShown ? undefined : 3);
    }, [textShown]);
  
    const onTextLayout = useCallback(
      (e) => {
        if (e.nativeEvent.lines.length > 2 && !textShown) {
          setShowMoreButton(true);
          setNumLines(2);
        }
      },
      [textShown],
    );
  
    return (
      <>
        <Text onTextLayout={onTextLayout} numberOfLines={numLines} style={textStyle} ellipsizeMode="tail">
          {text}
        </Text>
  
        {showMoreButton ? (
          <Text onPress={toggleTextShown} style={readMoreStyle}>
            {textShown ? 'Read Less' : 'Read More'}
          </Text>
        ) : null}
      </>
    );
  };


export default TextReadMore

