import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Pages/common/Footer';
import { getAllPosts } from '../../store/actions/postActions';
import Header from '../Common/Header';
import AdCard from './AdCard';
import AdFilters from './AdFilters';
import AdLoader from './AdLoader';
import AdPagination from './AdPagination';

const AllAds = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  const handleSearch = (queryStr) => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(queryStr.toLowerCase())
    );
    setFilteredPosts(filteredPosts);
  };

  const handleSort = (sortBy) => {
    const sortedPosts = [...filteredPosts];
    if (sortBy === 'newest') {
      sortedPosts.sort((a, b) => {
        return moment(b.createdAt).diff(moment(a.createdAt));
      });
    } else if (sortBy === 'oldest') {
      sortedPosts.sort((a, b) => {
        return moment(a.createdAt).diff(moment(b.createdAt));
      });
    } else if (sortBy === 'lowest') {
      sortedPosts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highest') {
      sortedPosts.sort((a, b) => b.price - a.price);
    }
    setFilteredPosts(sortedPosts);
  };

  const handlePrice = (price) => {
    const filteredPosts = [...posts];
    const filteredPostsByPrice = filteredPosts.filter(
      (post) => post.price >= price[0] && post.price <= price[1]
    );
    setFilteredPosts(filteredPostsByPrice);
  };

  return (
    <>
      <Header />
      <section className="my-md-3 bg-light">
        <div
          className="container mx-auto bg-white rounded-3 shadow-sm p-3 overflow-hidden"
          style={{ maxWidth: '1200px' }}
        >
          <AdFilters
            handleSearch={handleSearch}
            handleSort={handleSort}
            handlePrice={handlePrice}
          >
            <div className="row mb-3 gy-3">
              {loading
                ? [...Array(10)].map((_, i) => <AdLoader key={i} />)
                : filteredPosts.map((post, index) => (
                    <AdCard post={post} key={post._id} />
                  ))}
            </div>
            <AdPagination />
          </AdFilters>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllAds;
