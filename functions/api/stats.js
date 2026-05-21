import { MongoClient } from 'mongodb';

const mongoUri = "mongodb+srv://nathanmaulini167_db_user:z5SfFNxe2PQJHnXt@cluster0.y6ghewc.mongodb.net/hopital-pourtales?appName=Cluster0";

export async function onRequest(context) {
  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    
    const db = client.db('hopital-pourtales');
    const actuCount = await db.collection('actualites').countDocuments();
    const visiteCount = await db.collection('visites').countDocuments();
    
    await client.close();
    
    return new Response(
      JSON.stringify({
        success: true,
        stats: {
          actualites: actuCount,
          visites: visiteCount,
          mongodb: 'connected',
          timestamp: new Date().toISOString()
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
