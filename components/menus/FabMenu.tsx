import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import { Ionicons } from '@expo/vector-icons';

const ACTIONS = [
    { icon: 'camera', color: '#f39c12', label: '📸' },
    { icon: 'image', color: '#16a085', label: '🖼️' },
    { icon: 'mic', color: '#e74c3c', label: '🎤' },
];

export const FabMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <AnimatePresence>
                {open &&
                    ACTIONS.map((action, index) => (
                        <MotiView
                            key={action.icon}
                            from={{ opacity: 0, translateY: 0 }}
                            animate={{ opacity: 1, translateY: -((index + 1) * 60) }}
                            exit={{ opacity: 0, translateY: 0 }}
                            transition={{ type: 'timing', duration: 300, delay: index * 50 }}
                            style={[styles.action, { backgroundColor: action.color }]}
                        >
                            <TouchableOpacity onPress={() => console.log(`${action.icon} tapped`)}>
                                <Ionicons name={action.icon as any} size={24} color="#fff" />
                            </TouchableOpacity>
                        </MotiView>
                    ))}
            </AnimatePresence>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setOpen((prev) => !prev)}
                style={styles.fab}
            >
                <MotiView
                    animate={{ rotate: open ? '45deg' : '0deg' }}
                    transition={{ type: 'timing', duration: 300 }}
                >
                    <Ionicons name="add" size={28} color="#fff" />
                </MotiView>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 36,
        right: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
        backgroundColor: '#2d98da',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    action: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
    },
});
