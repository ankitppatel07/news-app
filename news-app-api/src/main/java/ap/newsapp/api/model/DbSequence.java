package ap.newsapp.api.model;

import java.util.Objects;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_sequence")
public class DbSequence {

	@Id
	private String id;
	private int seqNo;
	
	public DbSequence() {
		super();
	}
	
	public DbSequence(String id, int seqNo) {
		super();
		this.id = id;
		this.seqNo = seqNo;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getSeqNo() {
		return seqNo;
	}

	public void setSeqNo(int seqNo) {
		this.seqNo = seqNo;
	}

	@Override
	public String toString() {
		return "DbSequence [id=" + id + ", seqNo=" + seqNo + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, seqNo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DbSequence other = (DbSequence) obj;
		return Objects.equals(id, other.id) && seqNo == other.seqNo;
	}
	
	
}
