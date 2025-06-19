// components/ActionSheet.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, runOnJS } from 'react-native-reanimated';

const SCREEN_HEIGHT = Dimensions.get('window').height;

type ActionSheetProps = {
  visible: boolean;
  onClose: () => void;
  actions: { label: string; icon?: string; onPress: () => void }[];
};

export default function ActionSheet({ visible, onClose, actions }: ActionSheetProps) {
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationY > 0) translateY.value = e.translationY;
    })
    .onEnd(() => {
      if (translateY.value > 100) {
        runOnJS(onClose)();
      } else {
        translateY.value = withSpring(0);
      }
    });

  return (
    <AnimatePresence>
      {visible && (
        <View style={StyleSheet.absoluteFillObject}>
          <Pressable style={styles.backdrop} onPress={onClose} />

          <GestureDetector gesture={panGesture}>
            <MotiView
              from={{ translateY: SCREEN_HEIGHT }}
              animate={{ translateY: 0 }}
              exit={{ translateY: SCREEN_HEIGHT }}
              transition={{ type: 'timing', duration: 300 }}
              style={[styles.sheetContainer]}
            >
              <View style={styles.handleBar} />
              {actions.map((action, index) => (
                <Pressable
                  key={index}
                  style={styles.actionButton}
                  onPress={() => {
                    action.onPress();
                    onClose();
                  }}
                >
                  <Text style={styles.actionText}>
                    {action.icon ?? '🔘'} {action.label}
                  </Text>
                </Pressable>
              ))}
              <Pressable style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.cancelText}>❌ Cancelar</Text>
              </Pressable>
            </MotiView>
          </GestureDetector>
        </View>
      )}
    </AnimatePresence>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleBar: {
    alignSelf: 'center',
    marginVertical: 8,
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  actionButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  actionText: {
    fontSize: 18,
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 14,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
  },
  cancelText: {
    fontSize: 18,
    color: '#d00',
  },
});
