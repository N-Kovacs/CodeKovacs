import "./tools.css";

export default function AdvancedDiceSelectorItem(props) {
  let selectedClass = "Not-Selected";
  if (props.rolls.includes(props.ranking)) {
    selectedClass = "Selected";
  }

  return (
    <tr className={selectedClass}>
      <td>{props.ranking}</td>
      <td>{props.name}</td>
    </tr>
  );
}
