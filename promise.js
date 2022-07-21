function WaitForOrders()
{ 
    return new Promise((resolve, reject) => 
    {
        if($orders === undefined)
        {
			const maxAttempts = 5;
            let attemptsLeft = 5;
			
			if(attemptLimit === 0)
				reject(false);
			
			let interval = setInterval(() => 
			{
				$orders === undefined ? attemptsLeft-- : resolve(true);
			},1000)
        }
    });
}
