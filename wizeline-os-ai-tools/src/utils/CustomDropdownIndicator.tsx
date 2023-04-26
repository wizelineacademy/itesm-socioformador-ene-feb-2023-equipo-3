import { components } from "react-select";

const { DropdownIndicator } = components;

const CaretDownIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>



};

const CaretUpIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

};

export const CustomDropdownIndicator = (props) => {
  const {
    selectProps: { menuIsOpen }
  } = props;
  return (
    <DropdownIndicator {...props}>
      {menuIsOpen ? <CaretDownIcon /> : <CaretUpIcon />}
    </DropdownIndicator>
  );
};