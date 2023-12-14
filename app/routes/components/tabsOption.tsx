import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
// import LOGO from '../../assets/Images/logo.png';
// import High1 from '../../assets/Images/high1.png';
// import High2 from '../../assets/Images/high2.png';
// import Reels1 from '../../assets/Images/reels1.png';
// import Reels2 from '../../assets/Images/reels2.png';
// import SearchIcon from './searchIcon';
// import DrawerIcon from './drawersIcon';
import styles from '../styles';

// export const TabOption: any = () => {
//   return {
//     headerTitle: () => (
//       <Image
//         source={LOGO}
//         style={{ width: 178, height: 65 }}
//         resizeMode="contain"
//       />
//     ),
//     headerLeft: () => <DrawerIcon />,
//     headerRight: () => <SearchIcon />,
//     headerTitleAlign: 'center',
//   };
// };

export const TabIcons = (route: any, focused: any, color: any, size: any) => {
  var Icon;
  if (route.name === 'Overview') {
    Icon = (
      <Ionicons name={'home-outline'} color={color} style={styles.TabIcons} />
    );
  } else if (route.name === 'Home') {
    Icon = <Feather name="home" color={'red'} />
  } else if (route.name === 'Reels') {
    Icon = <Feather name="home" color={'red'} />
  }
  return Icon;
};
