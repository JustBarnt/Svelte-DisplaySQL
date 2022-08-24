<script>
	const formValues = { amount: "10", column: "createdby", value: "joshr", startDate:"", endDate:"" };
</script>

<div id="container">
	<form method="GET" class="get-form" action="/Licenses">
		
		<label for="amount">Top Results:</label>
		<input type="text" id="amount" name="Amount" placeholder="Number of responses" value="">
	
		<label for="name">With Tag:</label>
		<input type="text" id="name" name="Column" placeholder="Tag name" value="">
	
		<label for="value">Tag Value:</label>
		<input type="text" id="value" name="Value" placeholder="Tag value" value="">
	
		<label for="startDate">Earliest Date:</label>
		<input type="text" id="startDate" name="StartDate" placeholder="Earliest Date" value="">
	
		<label for="endDate">Latest Date:</label>
		<input type="text" id="endDate" name="EndDate" placeholder="Latest Date" value="">

		<input type="submit" value="Search"/>
	</form>
</div>

<style>
	#container{
		padding-top:calc(var(--headerHeight) + var(--contentPadding));
	}

	form{
		display: grid;
		width:80%;
		border: 0.25rem solid #24242450;
		border-radius: 1rem;
		background-color: var(--headerBG);
		box-shadow: 0 0 0.5rem 0.5rem #12121250;
		padding: 1rem 1rem;
		transition: border-color 0.25s, box-shadow 0.25s;
	}

	form:hover{
		border-color: var(--buttonBorder);
		box-shadow: 0 0 0.5rem 0.5rem #646cff50;
	}

	form:focus{
		outline: 0.4rem auto -webkit-focus-ring-color;
	}
	
	input{
		padding: 1rem 2rem;
		margin: 1.5rem 0;
	}
</style>