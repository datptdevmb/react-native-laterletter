import { memo } from "react";

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: object;
}


const Button: React.FC<ButtonProps> = (
    {
        title,
        onPress,
        disabled = false,
        style
    }
) => {
    return (
        <>
        </>
    );
}


export default memo(Button);

