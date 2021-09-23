package Voter.Voter.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @NoArgsConstructor
public class Candidate {

    public Candidate(String name,int age,Long property,float fulfillmentRate,PoliticalParty party
    ,ElectionType electionType) {
        this.name=name;
        this.age=age;
        this.property=property;
        this.fulfillmentRate=fulfillmentRate;
        this.party=party;
        this.electionType=electionType;
    }

    @Id @GeneratedValue
    @Column(name = "candidate_id")
    private Long id;

    private String name;

    private int age;

    private Long property;

    private float fulfillmentRate;

    private PoliticalParty party;

    private ElectionType electionType;

}
