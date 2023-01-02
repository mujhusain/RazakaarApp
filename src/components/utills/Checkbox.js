import CheckBox from '@react-native-community/checkbox';
import React, { useState} from'react';

export default function Checkbox(){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
    )
}