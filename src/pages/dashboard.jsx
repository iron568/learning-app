import { IronList } from "../components/add-list-items";
import { Counter } from "../components/Counter";
import { DisplayMonths } from "../components/Displaymonths";
import { DisplayWeek } from "../components/DisplayWeek";
import { HideShow } from "../components/HideShow";
import { List } from "../components/List";
import { NmaeSelector } from "../components/names-selector";
import { TrafficeLight } from "../components/traffice-singnal";
import { OnOf } from "./on-of-button";
import { ToggleColor } from "./ToggleColor";

export function DashboardContain() {
  return (
    <div className="mt-3 dashboard-page gap-3 d-flex flex-column">
      <div className="border p-3">
        <h3>Nams</h3>
        <NmaeSelector />
      </div>

      <div className="border p-3">
        <h3>IronList</h3>
        <IronList />
      </div>

      <div className="border p-3">
        <h3>List</h3>
        <List />
      </div>

      <div className="border p-3">
        <h3>Display Month</h3>
        <DisplayMonths />
      </div>

      <div className="border p-3 mt-3 dashboard-page gap-3 d-flex flex-column">
        <h3>Display Week</h3>
        <DisplayWeek />
      </div>

      <div className="border p-3">
        <h3>Counter</h3>
        <Counter />
      </div>

      <TrafficeLight />

      <ToggleColor />

      <div className="border p-3">
        <h3>On and Off</h3>
        <OnOf />
      </div>

      <div className="border p-3">
        <h3>Hide and Show</h3>
        <HideShow />
      </div>
    </div>
  );
}
