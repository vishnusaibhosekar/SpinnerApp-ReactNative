import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Animated, Easing } from 'react-native';
import { VictoryPie } from 'victory-native';

export default function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [colors, setColors] = useState(generateDistinctColors(10)); // Generate 10 distinct colors
  const [isSpinning, setIsSpinning] = useState(false);

  const spinValue = useRef(new Animated.Value(0)).current;

  // Generate distinct and visually pleasing colors
  function generateDistinctColors(count) {
    const colors = [];
    const goldenRatioConjugate = 0.618033988749895;

    for (let i = 0; i < count; i++) {
      const hue = (i * goldenRatioConjugate) % 1;
      const color = `hsl(${Math.floor(hue * 360)}, 70%, 60%)`;
      colors.push(color);
    }

    return colors;
  }

  // Shuffle an array randomly
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  useEffect(() => {
    const shuffledColors = shuffleArray(colors);
    setColors(shuffledColors);
  }, [names]);

  const addName = () => {
    if (newName.trim() !== '') {
      const updatedNames = [...names, newName];
      setNames(updatedNames);
      setNewName('');
    }
  };

  const resetNames = () => {
    setNames([]);
  };

  const spinPieChart = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const randomAngle = Math.random() * 360;

      Animated.timing(spinValue, {
        toValue: randomAngle,
        duration: 3000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: false, // Make sure to set this to false
      }).start(() => {
        setIsSpinning(false);
      });
    }
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['10800deg', '36000deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add names here:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNewName(text)}
        value={newName}
        placeholder="Enter a name"
      />
      <View style={styles.buttonContainer}>
        <Button title='Add Name' onPress={addName} />
        <Button title='Reset' onPress={resetNames} color='red' />
      </View>
      <View style={styles.chartContainer}>
        <Text>Names:</Text>
        <View style={styles.pieChartContainer}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <VictoryPie
              data={names.map((name, index) => ({ x: name, y: 1 }))}
              colorScale={colors}
              width={500}
              height={350}
              labels={({ datum }) => datum.x}
              labelRadius={60}
              labelPlacement="parallel" // Align labels along the radius
            />
          </Animated.View>
          {names.length >= 2 && (
            <View style={styles.pointerContainer}>
              <View style={styles.pointer}></View>
            </View>
          )}
        </View>
        <Button title="Spin" onPress={spinPieChart} disabled={isSpinning} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  chartContainer: {
    alignItems: 'center',
  },
  pieChartContainer: {
    position: 'relative',
  },
  pointerContainer: {
    position: 'absolute',
    top: 150, // Adjust the position as needed
    right: 100, // Adjust the position as needed
    alignItems: 'center',
  },
  pointer: {
    width: 50,
    height: 5,
    backgroundColor: 'black'
  },
});
