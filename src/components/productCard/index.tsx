import { IProduct } from "../../Interface/";
import { priceValidation, textSlicer } from "../../Utility/function";
import Image from "../image";
import Button from "../UI/Button";
import Colors from "../color";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  index: number;
  setProductToEditIndex: (value: number) => void;
  openConfirmModel: () => void;
}

const ProductCard = ({
  product,
  openEditModal,
  setProductToEdit,
  index,
  setProductToEditIndex,
  openConfirmModel,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;
  //--Render Function --//
  const renderColorsList = colors.map((color) => (
    <Colors color={color} key={color} />
  ));
  //---Handler Function --//

  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(index);
  };

  const openRemoveProduct = () => {
    setProductToEdit(product);
    openConfirmModel();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
      <div>
        <Image
          imageURL={imageURL}
          alt={product.title}
          className="rounded-md md:h-52 max-w-full object-cover flex-1"
        />
      </div>

      <h3 className="text-lg font-semibold flex-1">{textSlicer(title, 35)}</h3>
      <p className="text-sm text-gray-500 break-words ">
        {textSlicer(description, 150)}
      </p>

      <div className="flex items-center flex-wrap space-x-1 flex-1">
        {/* {renderColorsList} */}
        {!colors.length ? (
          <p className="min-h[20px]">Not Available Color!</p>
        ) : (
          renderColorsList
        )}
      </div>

      <div className="flex items-center justify-between flex-1">
        <span className="text-lg text-indigo-600 font-semibold">
          {priceValidation(Number(price))}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 font-semibold">
            {category.name}
          </span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-9 h-9 rounded-full object-fill"
          />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 flex-1">
        <Button
          className=" bg-blue-600 hover:bg-blue-800 w-full"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          className=" bg-red-600 w-full hover:bg-red-800"
          onClick={openRemoveProduct}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
