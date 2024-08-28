import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { categories, colors, formInputsList, productList } from "./data";
import { IProduct } from "./Interface";
import { productValidation } from "./validation";
import { productInputName } from "./type";
import "./index.css";
import ProductCard from "./components/productCard";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import ErrorMsg from "./components/errorMsg";
import Colors from "./components/color";
import SelectMenu from "./components/UI/SelectMenu";
import Footer from "./components/footer";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  //----------------State----------------------//
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [isOpen, setIsOpen] = useState(false);
  const [newProductList, setNewProductList] = useState<IProduct[]>(productList);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [isOpenEditModel, setIsOpenEditModel] = useState(false);
  const [isOpenConfirmModel, setIsOpenConfirmModel] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState(categories[0]);
  const [error, setError] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  //-------------------Handler function---------------------//
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openEditModal = () => setIsOpenEditModel(true);
  const closeEditModal = () => setIsOpenEditModel(false);
  const openConfirmModel = () => setIsOpenConfirmModel(true);
  const closeConfirmModel = () => setIsOpenConfirmModel(false);

  const onCancel = () => {
    setTempColor([]);
    setProduct(defaultProductObj);
    closeModal();
  };

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  const onchangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };


  const removeProductHandler = () => {
    const filterProduct = newProductList.filter(
      (productItem) => productItem.id !== productToEdit.id
    );
    setNewProductList(filterProduct);
    closeConfirmModel();
    toast.success("product has been deleted");
};
  //-------------------Render function---------------------//
  const renderProduct = newProductList.map((product, index) => (
    <ProductCard
      key={product.id} 
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      index={index}
      setProductToEditIndex={setProductToEditIndex}
      openConfirmModel={openConfirmModel}
    />
  ));

  const renderFormInputLIst = formInputsList.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label htmlFor={input.id} className=" text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onchangeHandler}
      />
      <ErrorMsg msg={error[input.name]} />
    </div>
  ));

  const renderColorsList = colors.map((color) => (
    <Colors
      color={color}
      key={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item != color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item != color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));
  const renderColorProduct = tempColor.map((color) => (
    <span
      key={color}
      style={{ backgroundColor: color }}
      className="rounded-md p-1 mb-1 text-white text-sm mr-1"
    >
      {color}
    </span>
  ));

  const renderColorToEditProduct = productToEdit.colors
    .concat(tempColor)
    .map((color) => (
      <span
        key={color}
        style={{ backgroundColor: color }}
        className="rounded-md p-1 mb-1 text-white text-sm mr-1"
      >
        {color}
      </span>
    ));
  const renderEditProductAErrorMs = (
    id: string,
    label: string,
    name: productInputName
  ) => {
    return (
      <div className="flex flex-col ">
        <label htmlFor={id} className=" text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onchangeEditHandler}
        />
        <ErrorMsg msg={error[name]} />
      </div>
    );
  };

  //------------------- submit function---------------------//
  
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMassage = Object.values(errors).some((value) => value !== "");

    if (hasErrorMassage) {
      setError(errors);
      return;
    }

    const newProduct = {
      ...product,
      id: uuid(),
      colors: tempColor,
      category: selectedCategories,
    };

    setNewProductList((prev) => [newProduct, ...prev]);

    setProduct(defaultProductObj);
    setTempColor([]);
    closeModal();
    toast.success("product has been added successfully");
  };
  
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, price, imageURL } = productToEdit;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const hasErrorMassage = Object.values(errors).some((value) => value !== "");

    if (hasErrorMassage) {
      setError(errors);
      return;
    }

    const updateProducts = [...productList];
    updateProducts[productToEditIndex] = {
      ...productToEdit,
      colors: productToEdit.colors.concat(tempColor),
    };
    setNewProductList(updateProducts);

    setProductToEdit(defaultProductObj);
    setTempColor([]);
    closeEditModal();
    toast.success("product has been modified successfully");
  };

  return (
    <>
      <div className="container ">
        <div className="my-5">
          <Button
            className=" bg-indigo-600 hover:bg-indigo-800 w-full "
            onClick={openModal}
          >
            Add Product
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-2 border-2 border-white rounded-md ">
          {renderProduct}
        </div>
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Add A New Product"
        >
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputLIst}
            <SelectMenu
              selected={selectedCategories}
              setSelected={setSelectedCategories}
            />
            <div className="flex items-center flex-wrap space-x-1 ">
              {renderColorsList}
            </div>
            <div className="flex items-center flex-wrap justify-start">
              {renderColorProduct}
            </div>
            <div className="flex items-center space-x-3 ">
              <Button
                className=" bg-gray-400 hover:bg-gray-600 w-full"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button className=" bg-blue-600 hover:bg-blue-800 w-full">
                Submit
              </Button>
            </div>
          </form>
        </Modal>
        <Modal
          /* {--///---------Edit model -----//--} */
          isOpen={isOpenEditModel}
          closeModal={closeEditModal}
          title="Edit This Product"
        >
          <form className="space-y-3" onSubmit={submitEditHandler}>
            {renderEditProductAErrorMs("title", "Product Title", "title")}
            {renderEditProductAErrorMs(
              "description",
              "Product Description",
              "description"
            )}
            {renderEditProductAErrorMs(
              "imageURL",
              "Product Image URL",
              "imageURL"
            )}
            {renderEditProductAErrorMs("price", "Product price", "price")}
            <SelectMenu
              selected={productToEdit.category}
              setSelected={(value) =>
                setProductToEdit({ ...productToEdit, category: value })
              }
            />
            <div className="flex items-center flex-wrap space-x-1 ">
              {renderColorsList}
            </div>
            <div className="flex items-center flex-wrap justify-start">
              {renderColorToEditProduct}
            </div>

            <div className="flex items-center space-x-3 ">
              <Button
                className=" bg-gray-400 hover:bg-gray-600 w-full"
                onClick={closeEditModal}
              >
                Cancel
              </Button>
              <Button className=" bg-blue-600 hover:bg-blue-800 w-full">
                Submit
              </Button>
            </div>
          </form>
        </Modal>
        <Modal
          isOpen={isOpenConfirmModel}
          closeModal={closeConfirmModel}
          title="Are you sure you want to remove this Product from your Store?"
          description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
        >
          <div className="flex items-center space-x-3 ">
            <Button
              className=" bg-gray-400 hover:bg-gray-600 w-full"
              onClick={closeConfirmModel}
            >
              Cancel
            </Button>
            <Button
              className=" bg-red-600 hover:bg-red-700 w-full"
              onClick={removeProductHandler}
            >
              Yes, Remove
            </Button>
          </div>
        </Modal>
        <Toaster />
      </div>
      <Footer/>
    </>
  );
}
export default App;
