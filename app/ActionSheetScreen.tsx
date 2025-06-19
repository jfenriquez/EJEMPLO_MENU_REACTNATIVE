import React from "react";
import { Text } from "react-native";
import { View, Button } from 'react-native';
import { useState } from 'react';
import ActionSheet from "@/components/menus/ActionSheet";

const ActionSheetScreen = () => {
  const [showSheet, setShowSheet] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mostrar Hoja de Acción 🚀" onPress={() => setShowSheet(true)} />
      <ActionSheet
        visible={showSheet}
        onClose={() => setShowSheet(false)}
        actions={[
          { label: '📷 Tomar foto', onPress: () => console.log('Tomar foto') },
          { label: '🖼️ Elegir de galería', onPress: () => console.log('Galería') },
          { label: '📁 Subir archivo', onPress: () => console.log('Subir archivo') },
        ]}
      />
    </View>
  )
};

export default ActionSheetScreen;
