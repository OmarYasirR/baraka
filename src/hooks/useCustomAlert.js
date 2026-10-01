import { useState, useCallback } from 'react';
import CustomAlert from '../components/common/CustomAlert';

export const useCustomAlert = () => {
  const [alertConfig, setAlertConfig] = useState({
    visible: false,
    type: 'success',
    title: '',
    message: '',
    onConfirm: null,
    confirmText: 'OK',
    showCancel: false,
    cancelText: 'Cancel',
    onCancel: null,
    autoClose: false,
    duration: 3000,
  });

  const showAlert = useCallback((config) => {
    setAlertConfig({
      ...alertConfig,
      ...config,
      visible: true,
    });
  }, []);

  const hideAlert = useCallback(() => {
    setAlertConfig(prev => ({ ...prev, visible: false }));
  }, []);

  const AlertComponent = useCallback(() => (
    <CustomAlert
      {...alertConfig}
      onConfirm={() => {
        if (alertConfig.onConfirm) {
          alertConfig.onConfirm();
        }
        hideAlert();
      }}
      onCancel={() => {
        if (alertConfig.onCancel) {
          alertConfig.onCancel();
        }
        hideAlert();
      }}
    />
  ), [alertConfig]);

  return {
    showAlert,
    hideAlert,
    AlertComponent,
  };
};