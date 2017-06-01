---
title: Databanken III - Spark Core oefeningen
link: http://robinmalfait.com/3de-jaar/semester-I/Databanken-III-SparkCore.md
---

# Exercise 1

## Part 1
```java
package bdstudents.quickstart;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaRDD<String> inputRDD = sc.textFile("/user/hduser/input/NYSE-2000-2001.tsv");
		JavaRDD<String> resultRDD = inputRDD.filter(line -> line.contains("ASP"));

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 2

```java
package bdstudents.quickstart;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaRDD<String> inputRDD = sc.textFile("/user/hduser/input/NYSE-2000-2001.tsv");
		JavaRDD<String> resultRDD = inputRDD.sample(true, 0.2);

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 3

```java
package bdstudents.quickstart;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Double> resultRDD = sc.textFile("/user/hduser/input/NYSE-2000-2001.tsv")
    		.map(line -> line.split("\t"))
    		.mapToPair(fields -> new Tuple2<String, Double>(fields[1], Double.parseDouble(fields[6])))
    		.reduceByKey((x, y) -> Math.max(x, y))
    		.sortByKey();

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 4

```java
package bdstudents.quickstart;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, StockPrice_Date> resultRDD = sc.textFile("/user/hduser/input/NYSE-2000-2001.tsv")
    		.map(line -> line.split("\t"))
    		.mapToPair(fields -> new Tuple2<String, StockPrice_Date>(fields[1], new StockPrice_Date(Double.parseDouble(fields[6]), fields[2])))
    		.reduceByKey((x, y) -> x.getStockPrice() > y.getStockPrice()?x:y)
    		.sortByKey();

		System.out.println(resultRDD.collect());
		sc.close();
	}
}

/**
    --> this object should implement java.io.Serializable. Otherwise you get an error
    Serialization stack:
	   - object not serializable (class: bdstudents.quickstart.StockPrice_Date, value: 2000-01-05 86.0)

    Via Google: http://stackoverflow.com/questions/22592811/task-not-serializable-java-io-notserializableexception-when-calling-function-ou
*/

package bdstudents.quickstart;

public class StockPrice_Date implements java.io.Serializable{
	private double stockPrice;
	private String date;

	public StockPrice_Date (double stockPrice, String date) {
		this.stockPrice = stockPrice;
		this.date = date;
	}

	public double getStockPrice() {
		return stockPrice;
	}
	public void setStockPrice(double stockPrice) {
		this.stockPrice = stockPrice;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String toString() {
		return this.date + " " + this.stockPrice;
	}

}
```

# Exercise 2

## Part 1

```java
package bdstudents.quickstart;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Double> resultRDD = sc.textFile("/user/hduser/input/moviecritics.txt")
			.filter(line -> line.length() > 0).map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, Integer>(fields[0], new Integer(fields[2])))
			.combineByKey(x -> new Tuple2<Integer, Integer>(x, 1),
				(x, y) -> new Tuple2<Integer, Integer>(x._1 + y, x._2 + 1),
				(x, y) -> new Tuple2<Integer, Integer>(x._1 + y._1, x._2 + y._2)
            )
			.mapToPair(t -> new Tuple2<String, Double>(t._1, (t._2._1 * 1.0) / t._2._2));

		sc.close();
	}
}
```

## Part 2

```java
/*** Using groupByKey() --> this is an expensive operation */
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Double> resultRDD = sc.textFile("/user/hduser/input/moviecritics.txt")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, Integer>(fields[0], new Integer(fields[2])))
			.groupByKey()
			.mapValues(line -> calculateMedian(line));

		System.out.println(resultRDD.collect());
		sc.close();
	}

	public static double calculateMedian(Iterable <Integer> iterable) {
		List<Integer> numbers = new ArrayList<Integer>();
	    for (Integer item : iterable) {
	        numbers.add(item);
	    }

		Collections.sort(numbers);
	    int middle = numbers.size()/2;
	    if (numbers.size()%2 == 1) {
	        return numbers.get(middle);
	    } else {
	        return (numbers.get(middle - 1) + numbers.get(middle)) / 2.0;
	    }
	}

}

/* Not using groupByKey */

	JavaPairRDD<String, Double> resultRDD = sc.textFile("/user/hduser/input/moviecritics.txt")
		.filter(line -> line.length() > 0)
		.map(line -> line.split("\t"))
		.mapToPair(fields -> new Tuple2<String, Integer>(fields[0], new Integer(fields[2])))
		.combineByKey(
		    x -> Arrays.asList(x),
		    (x, y) -> ListUtils.union(x, Arrays.asList(y)),
		    (x, y) -> ListUtils.union(x, y)
	    )
		.mapValues(line -> calculateMedian(line));

	System.out.println(resultRDD.collect());
	sc.close();
```

## Part 3

```java
/*** Using groupByKey() --> this is an expensive operation */
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Tuple2<String, Integer>> resultRDD = sc.textFile("/user/hduser/input/moviecritics.txt")
			.filter(line -> line.length() > 0).map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, String>(fields[1], fields[0]))
			.groupByKey()
			.mapValues(line -> calculateNumberAndTotalString(line));

		System.out.println(resultRDD.collect());
		sc.close();
	}

	public static Tuple2<String, Integer> calculateNumberAndTotalString(Iterable <String> iterable) {
		int number = 0;
		String totalString = "";
	    for (String item : iterable) {
	        totalString += item + "_";
	        number++;
	    }
	    return new Tuple2<String, Integer>(totalString, number);
	}

}


/* Not using groupByKey */

	JavaPairRDD<String, Tuple2<String, Integer>> resultRDD = sc.textFile("/user/hduser/input/moviecritics.txt")
		.filter(line -> line.length() > 0).map(line -> line.split("\t"))
		.mapToPair(fields -> new Tuple2<String, String>(fields[1], fields[0]))
		.combineByKey(
		    x -> Arrays.asList(x),
		    (x, y) -> ListUtils.union(x, Arrays.asList(y)),
		    (x, y) -> ListUtils.union(x, y)
	    )
		.mapValues(line -> calculateNumberAndTotalString(line));

```

# Exercise 3
## Part 1

```java
package bdstudents.quickstart;


import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaSparkContext;


import scala.Tuple2;

public class App {
	public static void main(String[] args) {

		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Integer> resultRDD = sc.textFile("/user/hduser/input/graph_data_part1.txt")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, Integer>(fields[1] + "_" + fields[2], 1))
			.reduceByKey((x,y) -> x + y)
			.filter(t -> t._2 == 3);

		System.out.println(resultRDD.collect());
		sc.close();

	}
}
```

## Part 2

```java
/**** Using distinct ***/
public class App {
	public static void main(String[] args) {

		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Integer> resultRDD = sc.textFile("/user/hduser/input/graph_data_part1.txt")
			.filter(line -> line.length() > 0)
			.distinct()
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, Integer>(fields[1] + "_" + fields[2], 1))
			.reduceByKey((x,y) -> x + y)
			.filter(t -> t._2 == 3);

		System.out.println(resultRDD.collect());
		sc.close();

	}
}


/**** Not using distinct ****/

package bdstudents.quickstart;

import java.util.Arrays;
import java.util.HashSet;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Integer> resultRDD = sc.textFile("/user/hduser/input/graph_data_part2.txt")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, String>(fields[1] + "_" + fields[2], fields[0]))
			.combineByKey(
			   x -> new HashSet<String>(Arrays.asList(x)),
			   (x, y) -> {x.add(y); return x;},
			   (x, y) -> {x.addAll(y); return x;}
		   )
			.mapValues(line -> line.size())
			.filter(t -> t._2 == 3);

		System.out.println(resultRDD.collect());
		sc.close();
	}

}
```

# Exercise 4

## Part 1

```java
package bdstudents.quickstart;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Result> resultRDD = sc.textFile("/user/hduser/input/results")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.map(fields -> new Result(fields[0], Integer.parseInt(fields[1]), fields[2], Integer.parseInt(fields[3])))
			.mapToPair(obj -> new Tuple2<String, Result>(obj.getCategory(), obj))
			.reduceByKey((x, y) -> x.getScore() > y.getScore()?x:y);

		System.out.println(resultRDD.collect());
		sc.close();
	}
}

package bdstudents.quickstart;

public class Result implements java.io.Serializable {
	private String name;
	private int age;
	private String gender;
	private int score;
	public Result(String name, int age, String gender, int score) {
		super();
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.score = score;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}

	public String getCategory() {
		String cat = "";
		if (this.age < 20){
			cat = "max20" + this.gender;
		}
		else if (this.age < 50) {
			cat = "between20And50" + this.gender;
		}
		else {
			cat = "min50" + this.gender;
		}
		return cat;
	}

	public String toString() {
		return this.name + "\t" + this.age + "\t" + this.gender + "\t" + this.score;
	}
}
```

## Part 2

```java
package bdstudents.quickstart;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaRDD<Result> resultRDD = sc.textFile("/user/hduser/input/results")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.map(fields -> new Result(fields[0], Integer.parseInt(fields[1]), fields[2], Integer.parseInt(fields[3])))
			.mapToPair(obj -> new Tuple2<String, Result>(obj.getCategory(), obj))
			.reduceByKey((x, y) -> x.getScore() > y.getScore()?x:y)
			.values()
			.mapToPair(obj -> new Tuple2<Integer, Result>(obj.getAge(), obj))
			.sortByKey()
			.values();

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

# Exercise 5

```java
package bdstudents.quickstart;

import java.util.Arrays;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaRDD<String> resultRDD = sc.textFile("/user/hduser/input/berichten")
			.filter(line -> line.length() > 0 && line.length() <= 140)
            .flatMap(line -> Arrays.asList(line.split(" ")).iterator())
            .filter(word -> word.startsWith("#"))
            .mapToPair(field -> new Tuple2<String, Integer>(field.toLowerCase(), 1))
            .reduceByKey((x, y) -> x + y)
	    /* sort on the values : flip left and right of the tuple + sort */
            .mapToPair(t -> new Tuple2<Integer, String>(t._2(), t._1()))
            .sortByKey(false)
            .map(t -> t._2() + " " + t._1());

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

# Exercise 6

## Part 1

```java
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;

import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String,HashSet<String>> resultRDD = sc.wholeTextFiles("/user/hduser/input/symptomen")
			/* sc.wholeTextFiles creates a PairRDD with the key being the file name with a path.
			 * Itís a full path like "/user/hduser/input/symptomen/Bronchitis".
			 * The value is the whole content of file in String.
			 * t._1 --> name of path
			 * t._2 --> content of file
			 */
			.mapToPair(t -> {
				/* Changing the path
				 * e.g. "/user/hduser/input/symptomen/Bronchitis" --> Bronchitis
				 */
				int positionSlash = t._1.lastIndexOf("/");
				String disease = t._1.substring(positionSlash + 1);
				return new Tuple2<String, String>(disease,t._2);})
			.flatMapValues(content -> new ArrayList<String>(Arrays.asList(content.split("\n"))))
			/* Flip left and right of the tuple */
			.mapToPair(t -> new Tuple2<String, String>(t._2(), t._1()))
			/* For each symptom there is a set of diseases */
			.combineByKey(
					   x -> new HashSet<String>(Arrays.asList(x)),
					   (x, y) -> {x.add(y); return x;},
					   (x, y) -> {x.addAll(y); return x;}
					   )
			/* Retrieve those sets with only 1 element */
			.filter(line -> line._2().size() == 1);

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 2

```java
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;

import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		ArrayList<String> alSymptoms = new ArrayList<String>(Arrays.asList("Vermoeidheid", "Verminderde eetlust", "Buikpijn", "Hoofdpijn", "Spierpijn", "Koorts"));

		JavaPairRDD<String,Double> resultRDD = sc.wholeTextFiles("/user/hduser/input/symptomen")
			/* sc.wholeTextFiles creates a PairRDD with the key being the file name with a path.
			 * Itís a full path like "/user/hduser/input/symptomen/Bronchitis".
			 * The value is the whole content of file in String.
			 * t._1 --> name of path
			 * t._2 --> content of file
			 */
			.mapToPair(t -> {
				/* Changing the path
				 * e.g. "/user/hduser/input/symptomen/Bronchitis" --> Bronchitis
				 */
				int positionSlash = t._1.lastIndexOf("/");
				String disease = t._1.substring(positionSlash + 1);
				return new Tuple2<String, String>(disease,t._2);})
			.mapValues(content -> {
				/* Contenf of file becomes ArrayList of String */
				ArrayList<String> al = new ArrayList<String>(Arrays.asList(content.split("[\r\n]")));
				/* number of Symptoms of this disease */
				int numberOfSymptoms = al.size();
				al.retainAll(alSymptoms);
				/* Calculating the percentage of Symptoms this disease has in common with alSymptoms */
				double percentage = al.size() * 100.0 / numberOfSymptoms;					
				return percentage;
			})
			/* sort on the values : flip left and right of the tuple + sort + flip left and right back */
			.mapToPair(t -> new Tuple2<Double, String>(t._2, t._1))
			.sortByKey(false)
			.mapToPair(t -> new Tuple2<String, Double>(t._2, t._1));

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

# Exercise 7

## Part 1

```java
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Integer> resultRDD = sc.textFile("/user/hduser/input/vriendenFout")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, String>(fields[0], fields[1]))
			.flatMapValues(content -> new ArrayList<String>(Arrays.asList(content.split(","))))
            .mapToPair(t -> {
            	String key = t._1 + "_" + t._2;
            	if (Integer.parseInt(t._1) > Integer.parseInt(t._2)) {
                    key = t._2 + "_" + t._1;                    
                }
            	return new Tuple2<String, Integer>(key, 1);
            }
            )
            .reduceByKey((x, y) -> x + y)
            .filter(t -> t._2() != 2);

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 2

```java
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, Integer> resultRDD = sc.textFile("/user/hduser/input/updates")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, Integer>(fields[0] + "_" + fields[1], 1))
            .reduceByKey((x, y) -> x + y)
            .filter(t -> t._2() > 1);

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 3

```java
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);


		/* In HDFS create a new folder exercise7 and put the files updates and friends in this folder */
		JavaPairRDD<String,Integer> resultRDD = sc.wholeTextFiles("/user/hduser/input/exercise7")
			.mapToPair(t -> {
				int positionSlash = t._1.lastIndexOf("/");
				String fileName = t._1.substring(positionSlash + 1);
				return new Tuple2<String, String>(fileName,t._2);})
			.flatMapValues(content -> new ArrayList<String>(Arrays.asList(content.split("\n"))))
			.mapToPair(t -> {
				String[] input = t._2.split("\t");
				HashSet<String> vrienden = new HashSet<String>();
				ArrayList<HashSet<String>> updates = new ArrayList<HashSet<String>>();
				if (t._1.equals("vrienden")){
					vrienden = new HashSet<String>(Arrays.asList(input[1].split(",")));
				}
				else if (t._1.equals("updates")){
					updates.add(new HashSet<String>(Arrays.asList(input[3].split(","))));
				}
				return new Tuple2<String,Tuple2<HashSet<String>,ArrayList<HashSet<String>>>> (input[0], new Tuple2<HashSet<String>,ArrayList<HashSet<String>>>(vrienden, updates));
			})
			.reduceByKey((x,y) -> {
				HashSet<String> vrienden = new HashSet<String>();
				ArrayList<HashSet<String>> updates = new ArrayList<HashSet<String>>();
				vrienden.addAll(x._1);
				vrienden.addAll(y._1);
				Iterator<HashSet<String>> iteratorx = x._2.iterator();
		        while (iteratorx.hasNext()) {
		           updates.add(iteratorx.next());
		        }
				Iterator<HashSet<String>> iteratory = y._2.iterator();
		        while (iteratory.hasNext()) {
		           updates.add(iteratory.next());
		        }					
				return new Tuple2<HashSet<String>,ArrayList<HashSet<String>>> (vrienden, updates);

			})
			.mapValues(t -> {
				int totaal = 0;
				for (int i = 0; i < t._2.size(); i++){
					t._2.get(i).retainAll(t._1);
					totaal += t._2.get(i).size();
				}
		        return totaal;
			})
			.sortByKey();

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```

## Part 4

```java
package bdstudents.quickstart;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.*;
import scala.Tuple2;

public class App {
	public static void main(String[] args) {
		SparkConf conf = new SparkConf().setAppName("Simple Application");
		JavaSparkContext sc = new JavaSparkContext(conf);

		JavaPairRDD<String, HashSet<String>> resultRDD = sc.textFile("/user/hduser/input/vrienden")
			.filter(line -> line.length() > 0)
			.map(line -> line.split("\t"))
			.mapToPair(fields -> new Tuple2<String, String>(fields[0], fields[1]))
			.mapValues(content -> {
				HashSet<String> input = new HashSet<String>(Arrays.asList(content.split(",")));
				ArrayList<Tuple2<String, HashSet<String>>> result = new ArrayList<Tuple2<String, HashSet<String>>>();
				Iterator<String> iterator = input.iterator();
				while(iterator.hasNext()) {
						HashSet<String> extraSet = (HashSet<String>) input.clone();
						String setElement = iterator.next();
						extraSet.remove(setElement);
						result.add(new Tuple2<String, HashSet<String>>(setElement, extraSet));
					}
					return result;
				})
			.flatMapValues(content -> content)
			.mapToPair(t -> {
            	String key = t._1 + "_" + t._2._1;
            	if (Integer.parseInt(t._1) > Integer.parseInt(t._2._1))
            		key = t._2._1 + "_" + t._1;
            	return new Tuple2<String, HashSet<String>>(key, t._2._2);					
				})
			.reduceByKey((x, y) -> {x.retainAll(y); return x;})
			.filter(t -> t._2.size() > 0)
			.sortByKey();

		System.out.println(resultRDD.collect());
		sc.close();
	}
}
```
