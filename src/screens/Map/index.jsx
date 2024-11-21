import React, { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { useFocusEffect } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import UserLocationMarker from "../../components/atoms/UserLocationMarker";
import ProducerInfo from "../../components/atoms/ProducerInfo";
import { fetchProducer } from "../../services/producerService";
import Loading from "../../components/atoms/Loading";
import MapStyle from "./style";
import { calculateDistance } from "../../utils/map";
import ProducerLocationMarker from "../../components/atoms/ProducerLocationMarker";

const Map = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [producersData, setProducersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const bottomSheetMapRef = useRef(null);
    const mapRef = useRef(null);

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ latitude, longitude });
            },
            () => {},
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const loadProducers = async () => {
        try {
            const data = await fetchProducer();
            if (currentLocation) {
                // Calcula a distância de cada produtor em relação à localização atual
                const producersWithDistance = data.data.map((producer) => {
                    const distance = calculateDistance(
                        currentLocation.latitude,
                        currentLocation.longitude,
                        parseFloat(producer.address.latitude),
                        parseFloat(producer.address.longitude)
                    );
                    return { ...producer, distance };
                });

                // Ordena os produtores pela distância
                producersWithDistance.sort((a, b) => a.distance - b.distance);

                setProducersData(producersWithDistance);
            }
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getCurrentLocation();
            if (currentLocation) {
                loadProducers().then(() => {});
            }
        }, [])
    );

    useEffect(() => {
        if (currentLocation) {
            loadProducers().then(() => {});
        }
    }, [currentLocation]);

    useFocusEffect(
        React.useCallback(() => {
            if (bottomSheetMapRef.current) {
                bottomSheetMapRef.current.expand();
            }
            return () => {
                if (bottomSheetMapRef.current) {
                    bottomSheetMapRef.current.close();
                }
            };
        }, [])
    );

    const handleCardPress = (latitude, longitude) => {
        if (mapRef.current) {
            mapRef.current.animateToRegion(
                {
                    latitude,
                    longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                },
                1000
            );
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <View style={MapStyle.mainContainer}>
            {currentLocation ? (
                <MapView
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={MapStyle.map}
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.15,
                        longitudeDelta: 0.1,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                        }}
                        title="Você está aqui"
                        description="Sua localização atual"
                    >
                        <UserLocationMarker />
                    </Marker>

                    {producersData.map((producer) => (
                        <Marker
                            key={producer.id}
                            coordinate={{
                                latitude: parseFloat(producer.address.latitude),
                                longitude: parseFloat(producer.address.longitude),
                            }}
                            title={producer.user.name}
                            description={`Distância: ${producer.distance.toFixed(2)} km`}
                        >
                            <ProducerLocationMarker imageUrl={producer.imagePath} />
                        </Marker>
                    ))}
                </MapView>
            ) : null}

            <BottomSheet
                ref={bottomSheetMapRef}
                index={1}
                snapPoints={[35, "40%"]}
                enableContentPanningGesture={false}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    >
                        {producersData.map((producer) => (
                            <View
                                style={MapStyle.producerInfoContainer}
                                key={producer.id}
                                onTouchEnd={() =>
                                    handleCardPress(
                                        parseFloat(producer.address.latitude),
                                        parseFloat(producer.address.longitude)
                                    )
                                }
                            >
                                <ProducerInfo
                                    name={producer.user.name}
                                    image={producer.imagePath}
                                    distance={producer.distance.toFixed(2)}
                                    showDistance={true}
                                    showProductsButton={true}
                                    showProductsIcon={true}
                                    producerId={producer.id}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </BottomSheet>
        </View>
    );
};

export default Map;
