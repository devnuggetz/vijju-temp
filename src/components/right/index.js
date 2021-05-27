import React from "react";
import { SampleData } from "../../data/sample";
import DataField from "./dataField";
import "./right.css";
import Table from "./table";

function Right() {
  const data = SampleData;
  const fields = data.fields;
  const tables = data.tables;
  const comps = data.components;
  const temp = Object.entries(fields);
  const getFields = (entry) => {
    const res = Object.entries(entry);
    const result = (
      <div className="fields">
        {res &&
          res.map((item) => {
            return <DataField title={item[0]} subtitle={item[1]} />;
          })}
      </div>
    );
    return result;
  };

  return (
    <div className="right">
      <div className="fields">
        {temp &&
          temp.map((item) => {
            return <DataField title={item[0]} subtitle={item[1]} />;
          })}
      </div>
      {tables &&
        tables.map((item) => {
          return <Table data={item.data} name={item.name} />;
        })}
      <div className="comps">
        {comps.map((item) => {
          return (
            <div>
              {item.component_name}
              {item.data.map((item2) => {
                const field = getFields(item2.fields);
                const table= getTable(item2.tables)
                return <div>
              })}
              {}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Right;
