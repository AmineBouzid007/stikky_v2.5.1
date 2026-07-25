import { getDashboardStats } from "@/lib/stats/dashboard";


export default async function DashboardPage(){

const stats = await getDashboardStats();


return (

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">
Dashboard
</h1>


<div className="grid grid-cols-2 md:grid-cols-4 gap-5">


<div className="border p-5">
<h2>Revenue</h2>
<p className="text-3xl font-bold">
{stats.revenue.toFixed(2)} TND
</p>
</div>



<div className="border p-5">
<h2>Orders</h2>
<p className="text-3xl font-bold">
{stats.totalOrders}
</p>
</div>



<div className="border p-5">
<h2>Pending</h2>
<p className="text-3xl font-bold">
{stats.pendingOrders}
</p>
</div>



<div className="border p-5">
<h2>Products</h2>
<p className="text-3xl font-bold">
{stats.totalProducts}
</p>
</div>


</div>


<h2 className="text-2xl mt-12 mb-5">
Recent Orders
</h2>


<div className="space-y-3">

{
stats.orders.slice(0,10).map(order=>(

<div
key={order.id}
className="border p-4 flex justify-between"
>

<div>
<p>
{order.customer_name}
</p>

<p className="text-sm opacity-60">
{new Date(order.created_at)
.toLocaleDateString()}
</p>
</div>


<div>
{order.total} TND
</div>


<div>
{order.status}
</div>


</div>

))
}


</div>


</div>

)

}
