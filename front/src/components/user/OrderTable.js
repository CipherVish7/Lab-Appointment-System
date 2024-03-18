import React from "react";
import {
  Grid,
  Table,
  Header,
  Icon,
  Button,
  Modal,
  ModalActions,
  ModalDescription,
  ModalHeader,
  ModalContent,
} from "semantic-ui-react";
import OrderForm from "../misc/OrderForm";
import PaymentUI from "../misc/PaymentUI";

function OrderTable({
  orders,
  orderDescription,
  handleInputChange,
  handleCreateOrder,
}) {
  let orderList;

  if (!orders || orders.length === 0) {
    orderList = (
      <Table.Row key="no-order">
        <Table.Cell collapsing textAlign="center" colSpan="3">
          No order
        </Table.Cell>
      </Table.Row>
    );
  } else {
    orderList = orders.map((order) => {
      let formateDate = new Date(order.createdAt);
      let amOrPm = formateDate.getHours() === 12 ? "am" : "pm";
      return (
        <Table.Row key={order.id}>
          <Table.Cell>{order.id}</Table.Cell>
          <Table.Cell>{`${formateDate.getFullYear()}-${formateDate.getMonth()}-${formateDate.getDay()} @ ${formateDate.getHours()}.${formateDate.getMinutes()}${amOrPm}`}</Table.Cell>
          <Table.Cell>{order.description}</Table.Cell>
        </Table.Row>
      );
    });
  }
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  return (
    <>
      <Grid stackable divided>
        <Grid.Row columns="2">
          <Grid.Column width="5">
            <Header as="h2">
              <Icon name="laptop" />
              <Header.Content>Your Appoiments</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            Make New Appoiment:{" "}
            <Button
              circular
              color="red"
              icon="add"
              onClick={() => setFirstOpen(true)}
            ></Button>
            <Modal
              onClose={() => setFirstOpen(false)}
              onOpen={() => setFirstOpen(true)}
              open={firstOpen}
            >
              <ModalHeader>
                Please Fill Below Details and Make Payment for Book Appoiment</ModalHeader>
              <ModalContent image>
              
                <ModalDescription>
                
                  <OrderForm
              orderDescription={orderDescription}
              handleInputChange={handleInputChange}
              handleCreateOrder={handleCreateOrder}
            />
            <PaymentUI/>
          
                </ModalDescription>
              </ModalContent>
              <ModalActions>
                <Button onClick={() => { setSecondOpen(true); handleCreateOrder(); }} primary>
                  Proceed <Icon name="right chevron" />
                </Button>
              </ModalActions>

              <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size="small"
              >
                <ModalHeader>Appoiment set Successfully</ModalHeader>
                <ModalContent>
                  <p>That's everything!</p>
                </ModalContent>
                <ModalActions>
                  <Button
                    icon="check"
                    content="All Done"
                    onClick={() => { setSecondOpen(false)}}
                  />
                </ModalActions>
              </Modal>
            </Modal>
            {/* <OrderForm
              orderDescription={orderDescription}
              handleInputChange={handleInputChange}
              handleCreateOrder={handleCreateOrder}
            /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Table compact striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={5}>ID</Table.HeaderCell>
            <Table.HeaderCell width={5}>
              Appoiment Date and Time
            </Table.HeaderCell>
            <Table.HeaderCell width={6}>Doctor</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{orderList}</Table.Body>
      </Table>
    </>
  );
}

export default OrderTable;
