// SpaceComponent.tsx
import React from 'react';
import { View } from 'react-native';

interface Props {
    width?: number;
    height?: number;
}

const SpaceComponent: React.FC<Props> = ({ width, height }) => {
    return (
        <View
            style={{
                width: width || 0,
                height: height || 0,
                backgroundColor: 'transparent',
            }}
        />
    );
};

export default SpaceComponent;
