import ImageColors from 'react-native-image-colors';

export const getColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri);
  let primary;
  let secondary;
  
  switch (colors.platform) {
    case 'android':      
      primary = colors.average;
      secondary = colors.dominant;
      break;
    case 'web':
      primary = colors.dominant;
      secondary = colors.vibrant;
      break;
    case 'ios':      
      primary = colors.detail;
      secondary = colors.background;
      break;
    default:
      throw new Error('Plataforma No determinada');
  }

  return [primary, secondary];
};
