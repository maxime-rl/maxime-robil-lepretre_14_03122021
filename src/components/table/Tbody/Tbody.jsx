import React from "react";

export default function Tbody({ elts }) {
  return (
    <tbody>
      {elts &&
        elts.map((elt, i) => (
          <tr key={i}>
            <td>{elt.firstName}</td>
            <td>{elt.lastName}</td>
            <td>{elt.dateOfBirth}</td>
            <td>{elt.startDate}</td>
            <td>{elt.street}</td>
            <td>{elt.city}</td>
            <td>{elt.locationState}</td>
            <td>{elt.zipCode}</td>
            <td>{elt.department}</td>
          </tr>
        ))}
    </tbody>
  );
}
