import { PixelPainterStore, setselectedColor } from '../stores/PixelPainterStore'

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
  const state = PixelPainterStore.useState();
  const computeRingSize = () => {
    if (state.selectedColor === color) {
      return "ring-8 ring-green-400"
    }
    return ""
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }}
      onClick={() => {setselectedColor(color)}}>
      </div>
    )
  }
  
  export default SelectColorButton