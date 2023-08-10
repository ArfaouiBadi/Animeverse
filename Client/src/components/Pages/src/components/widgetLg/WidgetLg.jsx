import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/api/orders");
        setOrders(res.data);
        
      } catch {}
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <thead className="widgetLgTh">Customer</thead>
          <thead className="widgetLgTh">Date</thead>
          <thead className="widgetLgTh">Amount</thead>
          <thead className="widgetLgTh">Status</thead>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.idUser}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.totalPrice}</td>
            <td className="widgetLgStatus">
              <Button type={"approved"} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
