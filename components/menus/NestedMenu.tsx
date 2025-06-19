// app/index.tsx (o cualquier archivo de ruta principal según tu estructura de carpetas)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { Link } from 'expo-router';
import { FabMenu } from './FabMenu';

type MenuItemProps = {
  title: string;
  children?: React.ReactNode;
};

const MenuItem = ({ title, children }: MenuItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.menuItemContainer}>
      <TouchableOpacity onPress={() => setOpen(prev => !prev)}>
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration: 300 }}
          style={styles.menuButton}
        >
          <MotiText style={styles.menuText}>
            {title} {open ? '🔽' : '▶️'}
          </MotiText>
        </MotiView>
      </TouchableOpacity>
      {open && children && (
        <MotiView
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300 }}
          style={styles.subMenuContainer}
        >
          {children}
        </MotiView>
      )}
    </View>
  );
};

const NestedMenu = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <FabMenu/>
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 500 }}
        style={styles.title}
      >
        Menú Principal 🚀
      </MotiText>
      <MenuItem title="Categoría 1">
        <View style={styles.subMenuItems}>
          <Link href="/categoria1/opcion1" style={styles.link}>
            <Text style={styles.subMenuText}>Opción 1 🍎</Text>
          </Link>
          <Link href="/categoria1/opcion2" style={styles.link}>
            <Text style={styles.subMenuText}>Opción 2 🍊</Text>
          </Link>
        </View>
      </MenuItem>
      <MenuItem title="Categoría 2">
        <View style={styles.subMenuItems}>
          <Link href="/categoria2/opcion1" style={styles.link}>
            <Text style={styles.subMenuText}>Opción A 🍇</Text>
          </Link>
          <Link href="/categoria2/opcion2" style={styles.link}>
            <Text style={styles.subMenuText}>Opción B 🍉</Text>
          </Link>
        </View>
      </MenuItem>
      <MenuItem title="Configuración ⚙️">
        <View style={styles.subMenuItems}>
          <Link href="/configuracion/perfil" style={styles.link}>
            <Text style={styles.subMenuText}>Perfil 👤</Text>
          </Link>
          <Link href="/configuracion/ajustes" style={styles.link}>
            <Text style={styles.subMenuText}>Ajustes 🔧</Text>
          </Link>
        </View>
      </MenuItem>
    </ScrollView>
  );
};

export default NestedMenu;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItemContainer: {
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  menuButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
  },
  menuText: {
    fontSize: 18,
    color: '#FFF',
  },
  subMenuContainer: {
    backgroundColor: '#E8F5E9',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  subMenuItems: {
    marginTop: 10,
  },
  subMenuText: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  link: {
    textDecorationLine: 'none',
  },
});
