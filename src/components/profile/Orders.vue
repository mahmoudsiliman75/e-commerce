<template>
  <div class="tab_content">
    <div class="orders_wraper">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr 
            v-for=" order in orders "
            :key=" order.id "
          >
            <td> #{{ order.id }} </td>
            <td>	{{ order.date }} </td>
            <td>
              <span 
                class="badge bg-success p-2"
                v-if=" order.status == 'delivered' "
              >
                {{ order.status }}
              </span>

              <span 
                class="badge bg-warning p-2"
                v-if=" order.status == 'on hold' "
              >
                {{ order.status }}
              </span>

              <span 
                class="badge bg-danger p-2"
                v-if=" order.status == 'cancled' "
              >
                {{ order.status }}
              </span>
            </td>
            <td>
              <span> {{ order.fees }} EGP </span>
              for 
              <span> {{ order.items_count }} items </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",

  data() {
    return {
      orders: [
        {
          id: 1,
          date: "February 24, 2021",
          status: "on hold",
          fees: 900,
          items_count: 9,
        },
        {
          id: 2,
          date: "February 20, 2021",
          status: "delivered",
          fees: 250,
          items_count: 1,
        },
        {
          id: 3,
          date: "February 18, 2021",
          status: "cancled",
          fees: 500,
          items_count: 4,
        },
      ],
    }
  },
}
</script>