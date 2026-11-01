import { createTamagui } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

const appConfig = createTamagui({
  ...defaultConfig,
  media: {
    max2Xl: { maxWidth: 1536 },   
    maxXl: { maxWidth: 1280 }, 
    maxLg: { maxWidth: 1024 },
    maxMd: { maxWidth: 768 },
    maxSm: { maxWidth: 640 },
    maxXs: { maxWidth: 460 },   
    max2xs: { maxWidth: 340 },
    '2xs': { minWidth: 340 },
    xs: { minWidth: 460 },
    sm: { minWidth: 640 },  
    md: { minWidth: 768 },
    lg: { minWidth: 1024 },
    xl: { minWidth: 1280 },
    '2xl': { minWidth: 1536 }, 
  } 
})

export default appConfig;