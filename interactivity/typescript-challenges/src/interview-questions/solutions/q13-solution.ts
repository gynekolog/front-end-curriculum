export let areRotations = (text1: string, text2: string): boolean => {
    const extendedText = text1 + text1;
    return ( extendedText.indexOf(text2) !== -1 ) ? true : false;
};
