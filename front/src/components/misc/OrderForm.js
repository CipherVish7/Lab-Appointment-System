import React, { useEffect, useState } from "react";
import { Form, GridRow, GridColumn, Dropdown, Grid } from "semantic-ui-react";
import { orderApi } from "./OrderApi";

function OrderForm({
  appoimentDate,
  orderDescription,
  handleInputChange,
  handleCreateOrder,
}) {
  const [doctorOptions, setDoctorOptions] = useState([]);
  const createBtnDisabled = appoimentDate === "" || false;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await orderApi.getDoctorList();
        const doctorList = response.data.map((doctor) => ({
          key: doctor.docid,
          text: doctor.name,
          value: doctor.name,
        }));
        setDoctorOptions(doctorList);
      } catch (error) {
        console.error("Error fetching doctor list:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Form onSubmit={handleCreateOrder}>
      <Grid reversed="tablet vertically">
        <GridRow >
          <GridColumn width={7}>
            Select Date and Time to set Appoiment:
            <Form.Input
              name="orderDate"
              placeholder="select Date you want to set Appoiment"
              value={appoimentDate}
              onChange={handleInputChange}
              type="datetime-local"
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={7}>
            Select Doctor For Appoiment:
            <Dropdown
              placeholder="Select Doctor"
              name="docName"
              fluid
              selection
              options={doctorOptions}
              onChange={handleInputChange}
            />
          </GridColumn>
        </GridRow>
      </Grid>
      <Form.Group></Form.Group>
    </Form>
  );
}

export default OrderForm;
