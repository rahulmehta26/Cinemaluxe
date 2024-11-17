import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

export async function navigate(routeName, params) {

    if( await navigationRef.isReady() ){
        navigationRef.dispatch(CommonActions.navigate(routeName, params));
    }
    
};

export async function resetAndNavigate(routeName) {
    if (await navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName }],
        })
      );
    }
  };
  
  
  export async function goBack() {
    if (await navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.goBack());
    }
  };