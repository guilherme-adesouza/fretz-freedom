import React from "react";
import Button from "components/commons/Button";
import Icon from "components/commons/Icon";

const Table = ({
                   onClickItem = null,
                   data = [],
                   actions = [],
                   header = null,
                   itemTitle = '',
               }) => {

    const _header = header || !!data && data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <table>
            <thead>
            <tr>
                {_header.map((column, idx) => {
                    return (
                        <th key={idx}>{column}</th>
                    )}
                )}
            </tr>
            </thead>
            <tbody>
            {data.map((row, idx) => (
                          <tr key={idx}
                              onClick={(e) => !!onClickItem && onClickItem(row)}
                              style={!!onClickItem ? {cursor: 'pointer'} : {}}
                              title={itemTitle}>
                              {Object.values(row).map((value, idx) => (
                                                          <td key={idx}>
                                                              {typeof value === 'boolean' ?
                                                                  <input type="checkbox" checked={value}/>: value
                                                              }
                                                          </td>
                                                      )
                              )}
                              {actions.map((action, idx) => {
                                  return (
                                      <td key={idx}>
                                          <Button onClick={() => !action.onClick && action.onClick(row)}>
                                              <Icon icon={action.icon} size={action.iconSize || "medium"}/>
                                              <span>{action.description}</span>
                                          </Button>
                                      </td>
                                  )
                              })}
                          </tr>
                      )
            )}
            </tbody>
        </table>
    )
};

export const TableCRUD = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <Table {...props} />
                </div>
            </div>
        </div>
    )
};

export default Table;
