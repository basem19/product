interface IProps {
  color: string;
}

const CreateColor = ({ color }: IProps) => {
  return (
    <span
      style={{ backgroundColor: color }}
      className={` block w-10 h-10  `}
    ></span>
  );
};

export default CreateColor;
