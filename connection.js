
function get_conf_token(token){

	let config = [];


			config = {
				user: 'db_a6478c_onneweb_admin',
				password: 'razors1805',
				server: 'sql5092.site4now.net',
				database: 'db_a6478c_onneweb',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
			};
			
		
		
			let xconfig = {
				user: 'iEx',
				password: 'iEx',
				server: 'DESKTOP-E0KG096\\SQL17',
				database: 'ONNE',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
			};
		

	
	
	return config;
	
}

const configHost = {
	user: 'db_a6478c_onneweb_admin',
	password: 'razors1805',
	server: 'sql5092.site4now.net',
	database: 'db_a6478c_onneweb',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};

const sql = require('mssql');

let execute = {
	QueryLogin : (res,sqlqry)=>{	
		
		
		try {
		  const pool1 = new sql.ConnectionPool(configHost, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					res.send('error')
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	},
	QueryToken : (res,sqlqry,token)=>{	
		
		let config = get_conf_token(token);

		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					res.send('error')
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	},
	get_data_qry : (sqlqry,token)=>{	
				
		return new Promise((resolve,reject)=>{

			let config = get_conf_token(token);

			
			try {
				const pool1 = new sql.ConnectionPool(config, err => {
				  new sql.Request(pool1)
				  .query(sqlqry, (err, result) => {
					  if(err){
						  	console.log(err.message);
						  	reject();
					  }else{
							resolve(result);
					  }					
				  })
				  sql.close();  
				})
				pool1.on('error', err => {
					console.log('error sql = ' + err);
					reject();
					sql.close();
				})
			  } catch (error) {
				  	console.log(error);
					reject();   
					sql.close();
			  }

		})

	}
}



module.exports = execute;

