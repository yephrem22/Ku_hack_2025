<script>
    import { goto } from '$app/navigation';
    import SampleImg1 from "../../assets/SampleImage1.jpeg"
    import SampleImg2 from "../../assets/SampleImage2.jpeg"
    import SampleImg3 from "../../assets/SampleImage3.jpeg"

    let imageCards = [
      {
        label: "Family Dog",
        imageUrl: SampleImg1
      },
      {
        label: "Family Vacation",
        imageUrl: SampleImg2
      },
      {
        label: "Family Photo",
        imageUrl: SampleImg3
      }
    ];
  </script>
  
  <style>
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 2rem;
      justify-content: center;
    }
  
    .card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 300px;
      text-align: center;
      transition: transform 0.2s ease;
    }
  
    .card:hover {
      transform: scale(1.02);
    }
  
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  
    .label {
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      background: #f9f9f9;
    }

    button {
    background-color: #ed2b48;
    color: rgb(255, 255, 255);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    margin: 2rem auto 0;
  }
  </style>
  
  <div class="grid">
    {#each imageCards as card}
      <div class="card">
        <img src={card.imageUrl} alt={card.label} />
        <div class="label">{card.label}</div>
      </div>
    {/each}
  </div>
  
  <button>
    <input type="file" accept="image/*"/>
    Upload Image
  </button>
  <button on:click={() => goto('/dashboard')} class="dashboard-button">Back to Dashboard</button>