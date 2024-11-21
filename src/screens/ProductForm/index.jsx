import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { launchImageLibrary } from "react-native-image-picker";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./style";
import { createProduct, updateProduct } from "../../services/productService";
import { fetchProductTypes } from "../../services/productTypeService";
import { fetchProductUnit } from "../../services/productUnitService"

const ProductForm = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const editingProduct = route.params?.editingProduct || null;

    const [productName, setProductName] = useState(editingProduct?.name || "");
    const [description, setDescription] = useState(editingProduct?.description || "");
    const [price, setPrice] = useState(editingProduct?.price?.toString() || "");
    const [typeId, setTypeId] = useState(editingProduct?.typeId || "");
    const [unitId, setUnitId] = useState(editingProduct?.unit?.id || "");
    const [status, setStatus] = useState(editingProduct?.status || true);
    const [pesticides, setPesticides] = useState(editingProduct?.pesticides || false);
    const [image, setImage] = useState(editingProduct?.imagePath || null);
    const [productTypes, setProductTypes] = useState([]);
    const [units, setUnits] = useState([]);

    const loadProductTypes = async () => {
        try {
            const response = await fetchProductTypes();
            setProductTypes(response.data);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar os tipos de produtos.");
        }
    };

    const loadUnits = async () => {
        try {
            const response = await fetchProductUnit();
            setUnits(response.data);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar as unidades de medida.");
        }
    };

    const handleImagePick = async () => {
        const options = {
            mediaType: "photo",
            quality: 1,
        };

        await launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("Usuário cancelou a seleção de imagem.");
            } else if (response.errorMessage) {
                Alert.alert("Erro", "Erro ao selecionar imagem.");
            } else if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                setImage(asset.uri);
            }
        });
    };

    const handleSaveProduct = async () => {
        if (!productName.trim() || !description.trim() || !price.trim() || !typeId || !unitId) {
            Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
            return;
        }

        const productData = new FormData();
        productData.append("name", productName);
        productData.append("description", description);
        productData.append("price", price);
        productData.append("typeId", typeId);
        productData.append("unitId", unitId);
        productData.append("status", status);
        productData.append("pesticides", pesticides);
        if (image && !image.startsWith("uploads")) {
            const fileName = image.split("/").pop();
            const fileType = fileName.split(".").pop();
            productData.append("imagePath", {
                uri: image,
                name: fileName,
                type: `image/${fileType}`,
            });
        } else if (image) {
            productData.append("existingImagePath", image);
        }

        try {
            if (editingProduct) {
                console.log('Atualizando produto:', editingProduct.id);
                await updateProduct(editingProduct.id, productData);
                Alert.alert("Sucesso", "Produto atualizado!");
            } else {
                await createProduct(productData);
                Alert.alert("Sucesso", "Produto criado!");
            }

            navigation.goBack();
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
            Alert.alert("Erro", "Não foi possível salvar o produto.");
        }
    };

    useEffect(() => {
        loadProductTypes().then(r => {});
        loadUnits().then(r => {});
    }, []);

    return (
        <View style={styles.formContainer}>
            <Text style={styles.header}>
                {editingProduct ? "Editar Produto" : "Cadastrar Produto"}
            </Text>
            <TextInput
                placeholder="Nome do produto"
                value={productName}
                onChangeText={setProductName}
                style={styles.input}
            />
            <TextInput
                placeholder="Descrição"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                style={[styles.input, styles.textArea]}
            />
            <TextInput
                placeholder="Preço"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                style={styles.input}
            />
            <Picker
                selectedValue={typeId}
                onValueChange={(itemValue) => setTypeId(itemValue)}
                style={[styles.picker, { borderWidth: 1, borderColor: "#ccc" }]}
            >
                <Picker.Item label="Selecione um tipo" value="" />
                {productTypes.map((type) => (
                    <Picker.Item key={type.id} label={type.name} value={type.id} />
                ))}
            </Picker>
            <Picker
                selectedValue={unitId}
                onValueChange={(itemValue) => setUnitId(itemValue)}
                style={[styles.picker, { borderWidth: 1, borderColor: "#ccc" }]}
            >
                <Picker.Item label="Selecione uma unidade" value="" />
                {units.map((unit) => (
                    <Picker.Item key={unit.id} label={unit.name} value={unit.id} />
                ))}
            </Picker>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Status (Ativo)</Text>
                <Switch value={status} onValueChange={setStatus} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Usa Agrotóxicos</Text>
                <Switch value={pesticides} onValueChange={setPesticides} />
            </View>
            <TouchableOpacity onPress={handleImagePick} style={styles.imageButton}>
                <Text style={styles.imageButtonText}>
                    {image ? "Trocar Imagem" : "Escolher Imagem"}
                </Text>
            </TouchableOpacity>
            {image && <Text style={styles.imagePreview}>{image.split("/").pop()}</Text>}
            <TouchableOpacity onPress={handleSaveProduct} style={styles.button}>
                <Text style={styles.buttonText}>{editingProduct ? "Atualizar" : "Adicionar"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductForm;
